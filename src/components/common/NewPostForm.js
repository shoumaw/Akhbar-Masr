import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DialogTitle, DialogContent } from '@material-ui/core';

export default function NewPostForm() {
  return (
    <React.Fragment>
      <DialogTitle>
        New Post
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <TextField
                    required
                    id="posttitle"
                    name="posttitle"
                    label="Post Title"
                    fullWidth
                    margin="dense"
                    autoComplete="post title"
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    required
                    id="postdescription"
                    name="postdescription"
                    label="Post Description"
                    fullWidth
                    multiline
                    margin="dense"
                    variant = "outlined"
                    autoComplete="post description"
                />
            </Grid>
        </Grid>
      </DialogContent>
    </React.Fragment>
  );
}