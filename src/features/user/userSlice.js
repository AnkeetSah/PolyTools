import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch current user
export const fetchUser = createAsyncThunk('user/fetchUser', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('http://localhost:3000/me', { credentials: 'include' });
    if (!res.ok) throw new Error('Unauthorized');
    return await res.json();

  } catch (err) {
    return rejectWithValue(err.message);
  }
});

// Logout user
export const logoutUser = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch('http://localhost:3000/logout', { credentials: 'include' });
    if (!res.ok) throw new Error('Logout failed');
    return true;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload;
        
        console.log('User fetched successfully:', action.payload.name);
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
