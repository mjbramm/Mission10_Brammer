import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';

function BowlingDataList() {
  const [bowlingData, setBowlingData] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const rsp = await fetch('http://localhost:5143/Bowling');
      const b = await rsp.json();
      setBowlingData(b);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <h3>Bowler Info List</h3> */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>BowlerName (First, Middle, Last)</th>
            <th>TeamName</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>PhoneNumber</th>
          </tr>
        </thead>
        <tbody>
          {bowlingData.map((b) => (
            <tr key={b.bowlerId}>
              <td>
                {b.bowlerFirstName}, {b.bowlerMiddleInit}, {b.bowlerLastName}
              </td>
              <td>{b.teamId === 1 ? 'Marlins' : 'Sharks'}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlingDataList;
