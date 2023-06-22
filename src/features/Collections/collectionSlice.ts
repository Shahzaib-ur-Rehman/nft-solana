import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type CollectionsResults = {
  mintAddress: string
  supply: number
  title: string
  content: string
  primarySaleHappened: boolean
  updateAuthority: string
  sellerFeeBasisPoints: number
  img: string
  price: number
  collectionTitle: string
}
type InitialState = {
  loading: boolean
  results: CollectionsResults[]
  error: string
}
const initialState: InitialState = {
  loading: false,
  results: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchListedNftsByCollectionSymbol = createAsyncThunk('nft/fetchListedNftsByCollectionSymbol', (params: {
  symbol:string,
  offset:number
}) => {

  return axios
    .get(` https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=${params.symbol}&limit=20&offset=${params.offset}`)
    .then(response => response.data.results)
})

export const fetchListedNftsByCollectionSymbolInfinate = createAsyncThunk('nft/fetchListedNftsByCollectionSymbol', (params: {
  symbol:string,
  offset:number
}) => {

  return axios
    .get(` https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=${params.symbol}&limit=20&offset=${params.offset}`)
    .then(response => response.data.results)
})

const collectionSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    clearResults:(state, action)=>{
      state.loading= false,
      state.results= action.payload,
      state.error= ''
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchListedNftsByCollectionSymbol.pending, state => {
      state.loading = true
    })
    builder.addCase(
      fetchListedNftsByCollectionSymbol.fulfilled,
      (state, action: PayloadAction<CollectionsResults[]>) => {
        state.loading = false
        state.results =[...state.results, ...action.payload]
        state.error = ''
      }
    )
    builder.addCase(fetchListedNftsByCollectionSymbol.rejected, (state, action) => {
      state.loading = false
      state.results = []
      state.error = action.error.message || 'Something went wrong'
    })
  }
})


export const {clearResults} =collectionSlice.actions

export default collectionSlice.reducer