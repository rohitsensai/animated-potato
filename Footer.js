import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon  from '@material-ui/icons/SkipPrevious'
import  SkipNextIcon  from '@material-ui/icons/SkipNext'
import  ShuffleIcon  from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import {Grid,Slider} from "@material-ui/core"
import  PlaylistPlayIcon  from '@material-ui/icons/PlaylistPlay'
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

function Footer() {
    return (
        <div className="footer">
        <div className="footer__left">
          <img className="footer__albumLogo" src="data:image/jpeg;base64,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" alt=""/>
          <div className="footer_songInfo">
              <h4>Yeah!</h4>
              <p>Usher</p>
          </div>
            </div>

            <div className="footer__center">
                  <ShuffleIcon className="footer__green"/>
                  <SkipPreviousIcon className="footer__icon"/>
                  <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                  <SkipNextIcon className="footer__icon"/>
                  <RepeatIcon className="footer__green"/>      

                </div> 

                <div className="footer__right">
                  <Grid container spacing={2}>
                      <Grid item>
                          <PlaylistPlayIcon/>
                  </Grid>
                  <Grid item>
                      <VolumeDownIcon/>
                      </Grid>
                      <Grid item xs>
                          <Slider />
                          </Grid>
                  </Grid>
                </div>
        </div>
    )
}

export default Footer
