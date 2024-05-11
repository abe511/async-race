const BASE_URL = 'http://127.0.0.1:3000';

export const addCars = async (payload: NewCarData[]): Promise<CarData[] | []> => {
  try {
    const result = await Promise.all(
      payload.map(async (car) => {
        const response = await fetch(`${BASE_URL}/garage`, {
          method: 'POST',
          body: JSON.stringify(car),
          headers: {
            'Content-type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to add cars');
        }
        const data = await response.json();
        return data;
      })
    );
    return result;
  } catch (error) {
    return [];
  }
};

export const getCars = async (): Promise<CarData[] | []> => {
  try {
    const response = await fetch(`${BASE_URL}/garage`);
    if (!response.ok) {
      throw new Error('Failed to get car data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getCarData = async (id: number): Promise<CarData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/garage/${id}`);
    if (!response.ok) {
      throw new Error('Failed to get car data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const createCar = async (payload: NewCarData): Promise<CarData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/garage`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to create a car');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

// export const updateCarData = async ({ id, ...payload }: CarData): Promise<CarData | null> => {
export const updateCarData = async ({ id, ...payload }: CarUpdateData): Promise<CarData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to update car data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const deleteCarData = async (id: number): Promise<CarData | null> => {
  try {
    const response = await fetch(`${BASE_URL}/garage/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete car data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

// handles all car status change requests ('started' | 'stopped' | 'drive')
export const engineControl = async (
  id: number,
  status: string
): Promise<EngineData | EngineStatus | null> => {
  const params = { id: id.toString(), status };
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${BASE_URL}/engine/?${query}`, {
      method: 'PATCH',
    });
    // for 'drive' mode only
    if (status === 'drive' && response.status === 500) {
      throw new Error('Engine failure');
    }
    // for all modes
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === 'Engine failure') {
        return { success: false };
      }
    }
    return null;
  }
};
