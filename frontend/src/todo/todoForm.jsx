import React from 'react'
import Grid from '../templates/Grid'
import IconButton from '../templates/iconButton'

export default props => (
    <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='adcione uma tarefa'></input>

        </Grid>

        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' />
        </Grid>

    </div>
)