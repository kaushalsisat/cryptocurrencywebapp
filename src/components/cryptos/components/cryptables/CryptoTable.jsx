import React from 'react'
import useCryptomarkets from '../../hooks/useCryptomarkets'
import { Table } from "antd";
import millify from "millify";
import useCryptoHistory from '../../hooks/useCryptoHistory';
import LineChart from '../graphs/LineChart';

const CryptoTable = () => {
    let {coins,isloading}=useCryptomarkets()


    const columns = [
        {
          title: 'Rank',
          dataIndex: 'rank',
          key: 'rank',
          responsive:["xs","sm","md","lg","xl",'xxl'],
          align:"center",
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          responsive:["xs","sm","md","lg","xl",'xxl'],
          align:"center",
          render:(text,record)=>(
             <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
             <img src={record.iconUrl} alt="" style={{width:"30px",height:"30px"}} />
              <span>{record.symbol}</span>
             </div>
          )
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          responsive:["xs","sm","md","lg","xl",'xxl'],
          align:"center",
          render:(text,record)=>`$${millify(record.price)}`
        },
        {
            title: 'Total24hv',
            dataIndex: '24hVolume',
            key: '24hVolume',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(text,record)=>`$${millify(text)}`
          },
          {
            title: 'MarketCap',
            dataIndex: 'marketCap',
            key: 'marketCap',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(text,record)=>`$${millify(text)}`
          },
          {
            title: 'Change',
            dataIndex: 'change',
            key:  'change',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(text,record)=>(
                <span style={{color:parseFloat(text)<0?"red":"green"}}>
                   {text}
                </span>
            )
          },
          {
            title: 'Graph',
            dataIndex: 'uuid',
            key:  'uuid',
            responsive:["xs","sm","md","lg","xl",'xxl'],
            align:"center",
            render:(coinId)=><HistoricalData data={coinId} />
          },
      ];

      // Function for Creating the Historical Data
      let HistoricalData = ({ data }) => {
          const { history, isloading, isError } = useCryptoHistory(data);
          if (isloading) {
            return <h4>loading..</h4>
          }
          if (isError) {
            return <h4>isError...</h4>
          }

          return <LineChart data={history} />
      }

  return (
    <div className='container-fluid my-5 blog-table-bg p-5 ml-1 mr-1'>
      {/* Make the table responsive by adding the `table-responsive` class */}
      <div className="table-responsive shadow rounded">
        <Table 
          dataSource={coins.map((coin) => ({ ...coin, key: coin.uuid }))} 
          columns={columns} 
          loading={isloading} 
          scroll={{x: "max-content"}}
        />
      </div>
    </div>
  )
}

export default CryptoTable

