# React + Vite
<ul>
<li>Backend source code: <a href="https://github.com/olhaizbash/test-events-registration"> Backend </a>;</li>
<li>Frontend source code: <a href="https://github.com/olhaizbash/test-events-registration-frontend"> Frontend </a>;</li>
<li>Live-page: <a href="https://olhaizbash.github.io/test-events-registration-frontend"> Live-page </a>;</li>
</ul>

Documentation to api 

Server : https://test-events-registration.onrender.com/;
<ul>
<li>Registration: </br>
Method: "patch"</br>
Route: "/user/register"</br>
Request body(required): type: json </br>
  example: { </br>
    "email": "ol@gmail.com", </br>
    "fullName": "olha izbash", </br>
    "dateOfBirth": "Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)", </br>
    "know": "own", </br>
    "participate":[ </br>
        { </br>
            "eventId": "66447b328918add9c0fb4f8a" </br>
        } </br>
    ] </br>
} </br>
</li>
  <li>
Get all events: </br>
Method: "get"</br>
Route: "/api/events"</br>
Parameters: query: page </br>
  example: ?page=${query}
</li>
<li>
Add event: </br>
Method: "post"</br>
Route: "/api/events"</br>
Request body(required): type: json </br>
  example:{ </br>
    "title": "Event", </br>
    "description": "Description", </br>
    "date": "Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)", </br>
    "organizer": "Kate Kate" </br>
} </br>
  </li>
  <li>
    Find participants: </br>
Method: "get"</br>
Route: "/api/events/find"</br>
Parameters: query: _id </br>
  example: ?_id=${query}
  </li>
</ul>

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
