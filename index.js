function fetchData1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data from fetchData1");
      }, 3000);
    });
  }
  
  function fetchData2() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data from fetchData2");
      }, 3000);
    });
  }
  
  async function fetchMultipleData() {
    try {
      let [data1, data2] = await Promise.all([fetchData1(), fetchData2()]);
      console.log(data1, data2);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  // Calling the function
  fetchMultipleData();
  
