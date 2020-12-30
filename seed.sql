USE employee_trackerDB;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),   
    ('Finance'),   
    ('Legal');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 10000, 1), 
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 160000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('John', 'Doe', 1, NULL), 
    ('Mike', 'Olsen', 2, 1),
    ('Ian', 'Cooper', 3, NULL),
    ('Greg', 'Smith', 4, 3),
    ('Sarah', 'Johnson', 5, NULL),
    ('Emily', 'Corcoran', 6, 5),
    ('Kayl', 'Rae', 7, NULL),
    ('Kylah', 'Joy', 8, 7)  