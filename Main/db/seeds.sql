USE employees;

INSERT INTO department (name)
VALUES ('Coorperate'),
        ('Marketing'),
        ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Lawyer', 50000, 1),
    ('The Jefe', 100000, 1),
    ('Janitors', 15000, 3),
    ('Sales bro', 40000, 3),
    ('SEO guy', 60000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jim', 'Harper', 4, 2),
    ('Michael', 'Scott', 2, 0),
    ('Dwight', 'Schrutt', 4, 2);

