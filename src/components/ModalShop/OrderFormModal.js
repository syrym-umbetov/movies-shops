import Box from '@mui/material/Box';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { CLOSE_MODAL } from '../../store/actions/shopActions';
import { useForm, Controller } from 'react-hook-form';
import { validatePhoneNumber } from '../../utils/validatePhoneNumber';
import { getFieldState } from '../../utils/getFieldState';
import { validateEmail } from '../../utils/validateEmail';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const OrderFormModal = () => {
  const open = useSelector((state) => state.shop.modalOpen);
  const dispatch = useDispatch();
  const { handleSubmit, control, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      city: null,
    },
  });
  const handleClose = useCallback(() => {
    dispatch({ type: CLOSE_MODAL });
  }, [dispatch]);

  const onSubmit = useCallback(
    (values) => {
      alert('SUBMIT');
      console.log(values);
      dispatch({ type: CLOSE_MODAL });
      reset();
    },
    [dispatch, reset]
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={modalStyle}>
        <Typography variant='h5'>Request Submit</Typography>
        <form style={{ marginTop: '10px' }} onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name='name'
              control={control}
              rules={{
                required: 'Field Required',
                minLength: 3,
              }}
              render={({ field, fieldState, formState }) => (
                <TextField
                  id='outlined-basic'
                  label='Name'
                  {...getFieldState({ fieldState, formState })}
                  variant='outlined'
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }} required>
            <Controller
              name='phone'
              control={control}
              rules={{
                required: 'Field required',
                validate: (value) => {
                  if (validatePhoneNumber(value)) {
                    return true;
                  } else {
                    return 'Incorrect phone number';
                  }
                },
              }}
              render={({ field, formState, fieldState }) => (
                <TextField
                  id='outlined-basic'
                  label='Phone number'
                  variant='outlined'
                  {...getFieldState({ fieldState, formState })}
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name='email'
              control={control}
              rules={{
                validate: (value) => {
                  if (validateEmail(value)) {
                    return true;
                  } else {
                    return 'incorrect email';
                  }
                },
              }}
              render={({ field }) => (
                <TextField
                  id='outlined-basic'
                  label='Email'
                  variant='outlined'
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Controller
              name='comment'
              control={control}
              rules={{
                minLength: 10,
              }}
              render={({ field }) => (
                <TextField
                  id='outlined-basic'
                  label='Comment'
                  variant='outlined'
                  {...field}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id='demo-simple-select-label'>City</InputLabel>
            <Controller
              name='city'
              control={control}
              render={({ field }) => (
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  label='City'
                  {...field}
                >
                  <MenuItem value={10}>Astana</MenuItem>
                  <MenuItem value={20}>Almaty</MenuItem>
                  <MenuItem value={30}>Shymkent</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Button variant='contained' type='submit'>
            Send
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export default OrderFormModal;
