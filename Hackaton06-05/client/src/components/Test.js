
import {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Test() {

    const [test,setTest]=useState([])

const hanleClick=()=>{
const name = document.getElementById('search').value
 console.log(name);
fetch(`http://localhost:5001/search?q=${name}`)
 .then((elem)=> elem.json())
 .then((data)=> {setTest(data);})
 .catch((err)=>{console.log(err);})
}
    
return(
<div>
<h1>Search your Fitness Test: </h1><br/>
<TextField id="outlined-basic" id="search" label="By Benchmark..." variant="standard" />
<Button onClick={hanleClick}>Submit!</Button><br/>
<TextField id="outlined-basic" id="domain" label="By Domain/Ability..." variant="standard" />
<Button onClick={hanleClick}>Submit!</Button><br/>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Benchmark</TableCell>
            <TableCell align="right">Basic Score </TableCell>
            <TableCell align="right">Advance Score</TableCell>
            <TableCell align="right">Expert Score</TableCell>
            <TableCell align="right">Elite Score</TableCell>
            <TableCell align="right">Phisical Domain/Ability</TableCell>
            <TableCell align="right">Special Note</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {test.map((elem) => (
            <TableRow
              key={elem.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {elem.benchmark}
              </TableCell>
              <TableCell align="right">{elem.basic_score}</TableCell>
              <TableCell align="right">{elem.advanced_score}</TableCell>
              <TableCell align="right">{elem.expert_score}</TableCell>
              <TableCell align="right">{elem.elite_score}</TableCell>
              <TableCell align="right">{elem.phisical_ability}</TableCell>
              <TableCell align="right">{elem.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




</div>)}
export default Test