import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { validationSchema } from '../../../Config/validation.config';
import { styles } from "./styles";


const useStyles = makeStyles(styles);


export default function CustomModel({ getUserFormData, isEdit, currentContactData, setIsEdit, handleUpdate }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);


  // functions to build form returned by useForm() hook
  const { register, handleSubmit, reset, setValue, errors, formState } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    if (isEdit) {
      setOpen(true)
      const fields = ['id', 'firstName', 'lastName', 'email', 'phone', 'company', 'designation', 'address'];
      fields.forEach(field => setValue(field, currentContactData[field]));
    }
  }, [isEdit, currentContactData, setValue])

  const onSubmit = (data) => {
    return !isEdit
      ? handleSave(data)
      : handleUpdateClick(currentContactData?.id, data);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
    setIsEdit(false)
  };

  const handleSave = (data) => {
    const newFormData = { ...data };
    getUserFormData(newFormData)
    setOpen(!open)
    reset()
  }

  const handleUpdateClick = (id, data) => {
    const newUpdateFormData = { ...data, id };
    handleUpdate(newUpdateFormData)
    setOpen(!open)
    reset()
  }

  return (
    <Box>
      <Button
        variant="contained"
        className={classes.buttonContainer}
        onClick={handleClickOpen}
      >
        {isEdit ?
          <Box
            component="span"
            color="textSecondary"
            fontFamily="'Trebuchet MS', sans-serif"
            fontSize="13px"
            fontWeight='bold'
          >
            + Update Contact
          </Box>
          :
          <Box
            component="span"
            color="textSecondary"
            fontFamily="'Trebuchet MS', sans-serif"
            fontSize="13px"
            fontWeight='bold'>
            + Add Contact
          </Box>
        }
      </Button >

      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          onReset={reset}
          className={classes.FormRoot}
          autoComplete="off"
        >
          <DialogTitle
            id="form-dialog-title">
            {isEdit ? 'Update Contact' : 'Add Contact'}
          </DialogTitle>
          <DialogContent>
            <TextField
              id="firstName"
              name="firstName"
              defaultValue={isEdit ? currentContactData?.firstName : null}
              label="First Name*"
              type="text"
              margin="dense"
              placeholder="Your First Name"
              className={classes.textField}
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              align="left"
              autoFocus
              error={Boolean(errors?.firstName)}
              helperText={errors?.firstName?.message}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name*"
              type="text"
              defaultValue={isEdit ? currentContactData?.lastName : null}
              margin="dense"
              placeholder="Your Last Name"
              className={classes.textField}
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              align="right"
              error={Boolean(errors?.lastName)}
              helperText={errors?.lastName?.message}
            />
            <TextField
              id="email"
              defaultValue={isEdit ? currentContactData?.email : null}
              name="email"
              label="Email*"
              type="text"
              placeholder="Your Email Address"
              margin="dense"
              className={classes.textField}
              variant="outlined"
              inputRef={register}
              align="left"
              InputLabelProps={{
                shrink: true,
              }}
              error={Boolean(errors?.email)}
              helperText={errors?.email?.message}
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone Number*"
              defaultValue={isEdit ? currentContactData?.phone : null}
              type="number"
              margin="dense"
              placeholder="Your Phone Number"
              className={classes.textField}
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              align="right"
              error={Boolean(errors?.phone)}
              helperText={errors?.phone?.message}
            />
            <TextField
              id="company"
              name="company"
              label="Company Name"
              defaultValue={isEdit ? currentContactData?.company : null}
              type="text"
              margin="dense"
              placeholder="Your Company Name"
              className={classes.textField}
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              align="left"
            />
            <TextField
              id="designation"
              name="designation"
              defaultValue={isEdit ? currentContactData?.designation : null}
              label="Designation"
              placeholder="Your Designation"
              type="text"
              margin="dense"
              className={classes.textField}
              variant="outlined"
              inputRef={register}
              InputLabelProps={{
                shrink: true,
              }}
              align="right"
            />
            <TextField
              id="address"
              name="address"
              defaultValue={isEdit ? currentContactData?.address : null}
              label="Address*"
              style={{ marginTop: 15, marginBottom: 15 }}
              placeholder="Add Your Address"
              fullWidth
              multiline
              rows={4}
              inputRef={register}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              error={Boolean(errors?.address)}
              helperText={errors?.address?.message}
            />
          </DialogContent>
          <DialogActions
            className={classes.dailogActionContainer}
          >
            <Button
              type="submit"
              variant="contained"
              disabled={formState.isSubmitting}
              className={classes.buttonSaveContainer}
            >
              <Box
                component="span"
                color="textSecondary"
                fontFamily="'Trebuchet MS', sans-serif"
                fontSize="13px"
                fontWeight='bold'>
                Save
              </Box>
            </Button>
            <Button
              variant="contained"
              className={classes.buttonCancelContainer}
              onClick={handleClose}
            >
              <Box
                component="span"
                color="textSecondary"
                fontFamily="'Trebuchet MS', sans-serif"
                fontSize="13px"
                fontWeight='bold'>
                Cance
              </Box>
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box >
  );
}
