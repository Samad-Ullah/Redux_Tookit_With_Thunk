import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCost } from "./feature/stock";
import { useDispatch, useSelector } from "react-redux";



function App() {
  const dispatch = useDispatch()
  const postsss = useSelector(state => state.stock.value)



  useEffect(() => {
    dispatch(getCost({ symbol: 10 }))
  }, [dispatch])


  console.log(postsss)






  return (
    <div className="App">

      <h1>Data show in Console</h1>

    </div>
  );
}

export default App;
