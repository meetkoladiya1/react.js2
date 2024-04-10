import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <div className='Table'>
        <table className='table'>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Work</th>
            </tr>
            <tr>
                <td>Rohit</td>
                <td>Sharma</td>
                <td>24</td>
                <td>Web Developer</td>
            </tr>
            <tr>
                <td>Arun</td>
                <td>Singh</td>
                <td>32</td>
                <td>Flutter Developer</td>
            </tr>
            <tr>
                <td>Sam</td>
                <td>Watson</td>
                <td>41</td>
                <td>Game Developer</td>
            </tr>
        </table>
    </div>
  );
}