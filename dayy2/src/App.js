import React, { useState } from 'react';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, MenuItem, Select, InputLabel, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const AddCustomerForm = () => {
  const [customer, setCustomer] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    accountType: '',
  });
  const [customers, setCustomers] = useState([]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer.name || !customer.gender || !customer.email || !customer.phone || !customer.accountType) {
      alert("Please fill in all fields!");
      return;
    }
    setCustomers([...customers, { id: customers.length + 1, ...customer }]);
    setCustomer({ name: '', gender: '', email: '', phone: '', accountType: '' });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'gender', headerName: 'Gender', width: 100 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'accountType', headerName: 'Account Type', width: 150 },
  ];

  return (
    <Box sx={{ margin: '20px' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: '400px',
          margin: 'auto',
          padding: 3,
          border: '1px solid #ccc',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={customer.name}
          onChange={handleChange}
          size="small"
          fullWidth
          required
        />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={customer.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
            <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          size="small"
          fullWidth
          required
        />
        <TextField
          label="Phone"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          size="small"
          fullWidth
          required
        />
        <FormControl fullWidth>
          <InputLabel>Account Type</InputLabel>
          <Select
            name="accountType"
            value={customer.accountType}
            onChange={handleChange}
            size="small"
            required
          >
            <MenuItem value="saving">Saving</MenuItem>
            <MenuItem value="current">Current</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Customer
        </Button>
      </Box>

      <Box sx={{ height: 400, width: '100%', marginTop: 2 }}>
        <DataGrid
          rows={customers}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default AddCustomerForm;
