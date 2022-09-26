// Import modules
import {toggleForm, clearForm}  from "./form";
import "./submit";
import { initDb, getDb, postDb } from './database';
import {fetchCards} from './cards';

// Import CSS files
import "../css/index.css";
import "../css/custom.css";
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from "../images/logo.png";
import Bear from "../images/bear.png";
import Dog from "../images/dog.png";

window.addEventListener('load', function() {
  initDb();
  fetchCards();
    // We are temporarily placing getDb() and postDb() function calls here for testing. We will move it to another event listener later.
  getDb();
  postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
  getDb();

  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

