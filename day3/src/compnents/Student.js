import React from 'react'

export default function Student({data}) {
  return (
    <div>
      <table border="2" cellspacing="5" cellpadding="5">
        <thead>
            <tr>
            <th>s.no</th>
            <th>name</th>
            <th>stream</th>

            </tr>
        </thead>
        <tbody>
            {data.map((stu)=>(
                <tr>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.stream}</td>
                 
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
}
