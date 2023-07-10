import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import api from '../../services/api'

export interface ArticleType {
  created_date: string
  article_title: string
  article_content: string
  article_type: string
  article_status: string
  article_url: string
  article_img: string
}

interface HomeState {
  loading: boolean
  ScrappingData: {
    title: string
    follower: string
    articleCount: number
    imgUrl: string
    description: string
    articles: ArticleType[]
  }
}

const initialState: HomeState = {
  loading: false,
  ScrappingData: {
    title: '',
    follower: '',
    imgUrl: '',
    description: '',
    articleCount: 0,
    articles: [],
  },
}

export const getData = createAsyncThunk('GET_DATA', async (url: string) => {
  const response = api.getData(url)
  return response
})

export const { reducer, actions } = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false
        if (action.payload?.data?.data) {
          state.ScrappingData.title = action.payload.data.data.title
          state.ScrappingData.follower = action.payload.data.data.follower
          state.ScrappingData.imgUrl = action.payload.data.data.img_url
          state.ScrappingData.description = action.payload.data.data.description
          state.ScrappingData.articleCount = action.payload.data.data.article_count
          state.ScrappingData.articles = action.payload.data.data.articles
        }
      })
      .addCase(getData.rejected, (state) => {
        state.loading = false
      })
  },
})

export const selectLoading = (state: RootState) => state.home.loading
export const selectScrappingData = (state: RootState) => state.home.ScrappingData
export default reducer
