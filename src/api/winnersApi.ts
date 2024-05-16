import { BASE_URL, winnersPageLimit } from 'constants/appData';

export const getWinners = async (
  page: number,
  setTotalItems: SetState,
  sort: string,
  order: string
): Promise<WinnerPayload[] | []> => {
  const params = {
    _page: page.toString(),
    _limit: winnersPageLimit.toString(),
    _sort: sort,
    _order: order,
  };
  const query = new URLSearchParams(params).toString();
  try {
    const response = await fetch(`${BASE_URL}/winners/?${query}`);
    if (!response.ok) {
      throw new Error('Failed to get winners data');
    }
    if (response.headers.get('x-total-count')) {
      const totalWinners = parseInt(response.headers.get('x-total-count') as string, 10);
      setTotalItems((prev: TotalItems) => ({ ...prev, winners: totalWinners }));
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getWinner = async (id: number): Promise<WinnerPayload | null> => {
  try {
    const response = await fetch(`${BASE_URL}/winners/${id}`);
    if (!response.ok) {
      throw new Error('Failed to get winners data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const createWinner = async (payload: WinnerPayload): Promise<WinnerPayload | null> => {
  try {
    const response = await fetch(`${BASE_URL}/winners`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to create a winner');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const updateWinnerData = async ({
  id,
  ...payload
}: WinnerPayload): Promise<WinnerPayload | null> => {
  try {
    const response = await fetch(`${BASE_URL}/winners/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Failed to update winner data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};

export const deleteWinnerData = async (id: number): Promise<true | null> => {
  try {
    const response = await fetch(`${BASE_URL}/winners/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete winner data');
    }
    await response.json();
    return true;
  } catch (error) {
    return null;
  }
};
