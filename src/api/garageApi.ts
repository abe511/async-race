const BASE_URL = 'http://127.0.0.1:3000';

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

export const updateCarData = async ({ id, ...payload }: CarData): Promise<CarData | null> => {
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
