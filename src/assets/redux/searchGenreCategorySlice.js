import { createSlice } from '@reduxjs/toolkit';

export const searchGenreCategorySlice = createSlice({
  name: 'searchGenreCategorySlice',
  initialState: {
    genre: {},
    category:'',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      state.genre = action.payload;
      state.searchQuery = '';
      state.category=''
      state.page=1
    },
    selectCategory: (state, action) => {
      state.category = action.payload;
      state.genre = {};
      state.searchQuery = '';
      state.page=1
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
      state.genreIdOrCategoryName='';
      state.category=''
      state.genre = {};
      state.page =1;
    },
    resetAll:(state)=>{
      state.genre= {},
      state.category='',
      state.page= 1,
      state.searchQuery= ''
    }
  },
});

export const { selectGenre, selectCategory ,searchMovie,resetAll} = searchGenreCategorySlice.actions;

export default searchGenreCategorySlice.reducer;
