import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import CourseList from './components/CourseList';
import EnrollmentList from './components/EnrollmentList';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Auth} />
                <Route path="/admin" component={AdminDashboard} />
                <Route path="/student" component={StudentDashboard} />
                <Route path="/courses" component={CourseList} />
                <Route path="/enrollments" component={EnrollmentList} />
                <Route path="/" exact component={Auth} />
            </Switch>
        </Router>
    );
};

export default App;
