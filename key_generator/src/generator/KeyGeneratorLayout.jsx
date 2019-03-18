import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    }, 
    rooot: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
      }
   
});

class KeyGeneratorLayout extends Component {
    render() {

        const { classes } = this.props;

        return (
            //<Paper>
                <form className={classes.container}>
                    <TextField
                        id="privateKey"
                        label="Private Key"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="publicKey"
                        label="Public Key"
                        defaultValue=""
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        variant="outlined"
                    />
                </form>
            //</Paper>
        );
    }
}
KeyGeneratorLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(KeyGeneratorLayout);