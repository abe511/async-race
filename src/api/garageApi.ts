import { VITE_BASE_URL as BASE_URL, garagePageLimit } from 'constants/appData';

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

export const getAllCars = async (): Promise<CarData[] | []> => {
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

export const getCars = async (page: number, setTotalItems: SetState): Promise<CarData[] | []> => {
  const params = { _page: page.toString(), _limit: garagePageLimit.toString() };
  const query = new URLSearchParams(params).toString();
  try {
    const response = await fetch(`${BASE_URL}/garage/?${query}`);
    if (!response.ok) {
      throw new Error('Failed to get car data');
    }
    if (response.headers.get('x-total-count')) {
      const totalCars = parseInt(response.headers.get('x-total-count') as string, 10);
      setTotalItems((prev: TotalItems) => ({ ...prev, cars: totalCars }));
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getCar = async (id: number): Promise<CarData | null> => {
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
