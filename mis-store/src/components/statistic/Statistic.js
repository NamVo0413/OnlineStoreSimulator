import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// import { Line } from '@ant-design/plots';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import ExportToExcel from '../exportToExcel/ExportToExcel';
import axios from 'axios'

import BarChart from '../chart/BarChart'

const dataJson = [
  {
    "Date": "2010-01",
    "scales": 1998
  },
  {
    "Date": "2010-02",
    "scales": 1850
  },
  {
    "Date": "2010-03",
    "scales": 1720
  },
  {
    "Date": "2010-04",
    "scales": 1818
  },
  {
    "Date": "2010-05",
    "scales": 1920
  },
  {
    "Date": "2010-06",
    "scales": 1802
  },
  {
    "Date": "2010-07",
    "scales": 1945
  },
  {
    "Date": "2010-08",
    "scales": 1856
  },
  {
    "Date": "2010-09",
    "scales": 2107
  },
  {
    "Date": "2010-10",
    "scales": 2140
  },
  {
    "Date": "2010-11",
    "scales": 2311
  },
  {
    "Date": "2010-12",
    "scales": 1972
  },
  {
    "Date": "2011-01",
    "scales": 1760
  },
  {
    "Date": "2011-02",
    "scales": 1824
  },
  {
    "Date": "2011-03",
    "scales": 1801
  },
  {
    "Date": "2011-04",
    "scales": 2001
  },
  {
    "Date": "2011-05",
    "scales": 1640
  },
  {
    "Date": "2011-06",
    "scales": 1502
  },
  {
    "Date": "2011-07",
    "scales": 1621
  },
  {
    "Date": "2011-08",
    "scales": 1480
  },
  {
    "Date": "2011-09",
    "scales": 1549
  },
  {
    "Date": "2011-10",
    "scales": 1390
  },
  {
    "Date": "2011-11",
    "scales": 1325
  },
  {
    "Date": "2011-12",
    "scales": 1250
  },
  {
    "Date": "2012-01",
    "scales": 1394
  },
  {
    "Date": "2012-02",
    "scales": 1406
  },
  {
    "Date": "2012-03",
    "scales": 1578
  },
  {
    "Date": "2012-04",
    "scales": 1465
  },
  {
    "Date": "2012-05",
    "scales": 1689
  },
  {
    "Date": "2012-06",
    "scales": 1755
  },
  {
    "Date": "2012-07",
    "scales": 1495
  },
  {
    "Date": "2012-08",
    "scales": 1508
  },
  {
    "Date": "2012-09",
    "scales": 1433
  },
  {
    "Date": "2012-10",
    "scales": 1344
  },
  {
    "Date": "2012-11",
    "scales": 1201
  },
  {
    "Date": "2012-12",
    "scales": 1065
  },
  {
    "Date": "2013-01",
    "scales": 1255
  },
  {
    "Date": "2013-02",
    "scales": 1429
  },
  {
    "Date": "2013-03",
    "scales": 1398
  },
  {
    "Date": "2013-04",
    "scales": 1678
  },
  {
    "Date": "2013-05",
    "scales": 1524
  },
  {
    "Date": "2013-06",
    "scales": 1688
  },
  {
    "Date": "2013-07",
    "scales": 1500
  },
  {
    "Date": "2013-08",
    "scales": 1670
  },
  {
    "Date": "2013-09",
    "scales": 1734
  },
  {
    "Date": "2013-10",
    "scales": 1699
  },
  {
    "Date": "2013-11",
    "scales": 1508
  },
  {
    "Date": "2013-12",
    "scales": 1680
  },
  {
    "Date": "2014-01",
    "scales": 1750
  },
  {
    "Date": "2014-02",
    "scales": 1602
  },
  {
    "Date": "2014-03",
    "scales": 1834
  },
  {
    "Date": "2014-04",
    "scales": 1722
  },
  {
    "Date": "2014-05",
    "scales": 1430
  },
  {
    "Date": "2014-06",
    "scales": 1280
  },
  {
    "Date": "2014-07",
    "scales": 1367
  },
  {
    "Date": "2014-08",
    "scales": 1155
  },
  {
    "Date": "2014-09",
    "scales": 1289
  },
  {
    "Date": "2014-10",
    "scales": 1104
  },
  {
    "Date": "2014-11",
    "scales": 1246
  },
  {
    "Date": "2014-12",
    "scales": 1098
  },
  {
    "Date": "2015-01",
    "scales": 1189
  },
  {
    "Date": "2015-02",
    "scales": 1276
  },
  {
    "Date": "2015-03",
    "scales": 1033
  },
  {
    "Date": "2015-04",
    "scales": 956
  },
  {
    "Date": "2015-05",
    "scales": 845
  },
  {
    "Date": "2015-06",
    "scales": 1089
  },
  {
    "Date": "2015-07",
    "scales": 944
  },
  {
    "Date": "2015-08",
    "scales": 1043
  },
  {
    "Date": "2015-09",
    "scales": 893
  },
  {
    "Date": "2015-10",
    "scales": 840
  },
  {
    "Date": "2015-11",
    "scales": 934
  },
  {
    "Date": "2015-12",
    "scales": 810
  },
  {
    "Date": "2016-01",
    "scales": 782
  },
  {
    "Date": "2016-02",
    "scales": 1089
  },
  {
    "Date": "2016-03",
    "scales": 745
  },
  {
    "Date": "2016-04",
    "scales": 680
  },
  {
    "Date": "2016-05",
    "scales": 802
  },
  {
    "Date": "2016-06",
    "scales": 697
  },
  {
    "Date": "2016-07",
    "scales": 583
  },
  {
    "Date": "2016-08",
    "scales": 456
  },
  {
    "Date": "2016-09",
    "scales": 524
  },
  {
    "Date": "2016-10",
    "scales": 398
  },
  {
    "Date": "2016-11",
    "scales": 278
  },
  {
    "Date": "2016-12",
    "scales": 195
  },
  {
    "Date": "2017-01",
    "scales": 145
  },
  {
    "Date": "2017-02",
    "scales": 207
  }
]
function Statistic() {
  const [data, setData] = useState([]);
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    annotations: [
      // 低于中位数颜色变化
      {
        type: 'regionFilter',
        start: ['min', 'median'],
        end: ['max', '0'],
        color: '#F4664A',
      },
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: {
          textBaseline: 'bottom',
        },
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: '#F4664A',
          lineDash: [2, 2],
        },
      },
    ],
  };
  const fileName = "products-13478s3ad2";
  useEffect(() => {
    let fetchData = async () =>{
        const result = axios.post('http://localhost:8080/api/store/one', 
            {
                "AccountID": "ch001"
            }
        ).then(function (res) {
            console.log(res.data.DanhSachSanPham);
            setData(res.data.DanhSachSanPham)
            
        }).catch(function (error) {
            console.log(error);
        });
        
        return result
    }
        
    fetchData()
    // setData(result.data);
}, []);
  return <div>
      Statistic
      
      
      <ExportToExcel apiData={data} fileName={fileName}></ExportToExcel>
        
      
  </div>;
}

export default Statistic;
