import { createSlice } from '@reduxjs/toolkit';

export const searchGenreCategorySlice = createSlice({
  name: 'searchGenreCategorySlice',
  initialState: {
    genre: {},
    categoryName:'',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      state.genre = action.payload;
      state.searchQuery = '';
      state.categoryName=''
      state.page=1
    },
    selectCategory: (state, action) => {
      state.categoryName = action.payload;
      state.genre = {};
      state.searchQuery = '';
      state.page=1
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
      state.genreIdOrCategoryName='';
      state.page =1
    },
  },
});

export const { selectGenreOrCategory, searchMovie } = searchGenreCategorySlice.actions;

export default searchGenreCategorySlice.reducer;
