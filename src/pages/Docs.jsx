import React from "react";

import A from "../util/A";

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

// import { makeStyles } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme) => ({}));

const Docs = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h5">Help</Typography>
      <Typography variant="body1">
        <p>This tool is usable in a number of different forms:</p>

        <ul>
          <li>A public website</li>
          <li>A downloadable app</li>
          <li>A <A href="https://nodejs.org/">node.js</A> application</li>
        </ul>

        <p>
          If you use it from the website, you can view the public games, and
          print their components right from your web browser. You can also load
          local json files into the site to view and print as well. You can customize
          the configuration options to get games to display just the way you like them.
        </p>

        <p>
          If you use it as an app, you can easily export full games to pdf,
          png and <A href="https://board18.org/">Board 18 game boxes</A>.
          You can open a local json file and have the app refresh as you
          edit it helping you prototype and create the games you want to
          create.
        </p>

        <p>
          If you download the source of the site you can run it locally.
          This allows you to develop on the application itself. This will
          let you add more features and options but requires knowledge of
          javascript. If you do add more features please consider submitting
          them back to the project to help the community!
        </p>
      </Typography>
      <Typography variant="h5">Goals</Typography>
      <Typography variant="body1">
        <ul>
          <li>Create a schema for 18xx games.</li>
          <li>Allow for rapid creation of a new game map and components.</li>
          <li>Disconnect tiles from individual games to make prototyping
            new games using existing tiles easy.</li>
          <li>Disconnect the definition of a game from it's look allowing
            game groups to play an existing game with the art they like.</li>
          <li>Provide multiple ways to output components allowing for easy
            external editing.</li>
        </ul>
      </Typography>

      <Typography variant="h5">Links</Typography>
      <Typography variant="body1">
        <ul>
          <li><A href="https://github.com/18xx-maker/18xx-maker">Github</A> - Source code</li>
          <li><A href="https://18xx-maker.com">Hosted Site</A> - Publically hosted version of the web site</li>
          <li><A href="https://www.board18.org">Board 18</A> - Remote play rool for 18xx games</li>
        </ul>
      </Typography>
    </Container>

  );
};

export default Docs;