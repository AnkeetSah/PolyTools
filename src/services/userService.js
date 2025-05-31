

export async function fetchUserDetails() {
  try {
    const response = await fetch('https://polytools-backend.onrender.com/me', {
      credentials: 'include',
    });
    if (!response.ok) {
      throw new Error('User not authenticated');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
