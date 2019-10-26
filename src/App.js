import React, { Component } from 'react';
import './App.css';
import Card from './Components/Card';
import CoinCard from './Components/CoinCards';
import { Container, Row, Col } from 'reactstrap';


const axios = require('axios');


class App extends Component {

  state = {

    price: '',
    marketCap: '',
    dayVol: '',
    coinUrl: '',
    perChange: '',
    coinName: '',
    coinData: '',
    isLoaded: false,
    error: null,

  }

  //App Methods

  getCoinData = () => {

    axios.get("https://coingecko.p.rapidapi.com/coins/markets?price_change_percentage=24h&page=1&sparkline=true&per_page=20&order=market_cap_desc&vs_currency=gbp", {
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": "d972f87b07mshbbf70a287d9ff97p1fe6c3jsn9dd805742889"
      }
    }
    ).then(response => {

      const formPrice = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(response.data[0].current_price);

      const formVol = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(response.data[0].total_volume);

      const formMarCap = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(response.data[0].market_cap);

      const formPerChange = response.data[0].price_change_percentage_24h.toFixed(2);

      const allData = response.data;



      const optionsInit = {
        currentMarketPrice: formPrice,
        currentVolume: formVol,
        currentMarketCap: formMarCap,
        percentage_change: formPerChange,
        coinImgUrl: response.data[0].image,
        coinData: allData
      }

      this.setIntialCoin(optionsInit)

    }).catch(err => {
      console.log(err);
    })

  }

  setIntialCoin = (optionsInit) => {
    this.setState({
      price: optionsInit.currentMarketPrice,
      dayVol: optionsInit.currentVolume,
      marketCap: optionsInit.currentMarketCap,
      perChange: optionsInit.percentage_change,
      coinUrl: optionsInit.coinImgUrl,
      coinData: optionsInit.coinData
    })
  }

  toggleCoin = (itemIndex) => {
    console.log(itemIndex);

    const newDataArr = [...this.state.coinData];
    const selCoin = newDataArr[itemIndex];
    console.log(selCoin)

    const formPrice = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(selCoin.current_price);

    const formVol = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(selCoin.total_volume);

    const formCap = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(selCoin.market_cap);

    const perChange24 =

      this.setState({
        price: formPrice,
        dayVol: formVol,
        marketCap: formCap,
        coinUrl: selCoin.image,
        perChange: selCoin.price_change_percentage_24h.toFixed(2)
      })
  }

  componentDidMount() {

    this.getCoinData();

  }

  render() {

    let arrOne = [...this.state.coinData]

    let mappedArr = arrOne.map((item, index) => {
      const capitalOne = item.id.charAt(0).toUpperCase() + item.id.substring(1);
      const coinSym = item.symbol.toUpperCase()
      return <CoinCard key={item.id} coinName={capitalOne} coinSymbol={coinSym} imageUrl={item.image} clicked={() => { this.toggleCoin(index) }} />
    })


    return (
      <div className="App" >
        <Card price={this.state.price} volume={this.state.dayVol} marketCap={this.state.marketCap} perChange={this.state.perChange} coinUrl={this.state.coinUrl} />

        <Container>
          <Row>
            {mappedArr}
          </Row>
        </Container>
      </div>
    )
  };
}

export default App;
