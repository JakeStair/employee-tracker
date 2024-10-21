-- Insert departments into Department table (use ON CONFLICT to avoid duplicates)
INSERT INTO Department (name)
VALUES
('Ghosts'),
('Human Resources'),
('History'),
('Culinary Arts')
ON CONFLICT (name) DO NOTHING;

-- Insert roles into Role table
INSERT INTO Role (title, salary, department_id)
VALUES 
('Ghost', 50000, 1),
('Caretaker', 45000, 1),
('Historian', 55000, 1),
('Chef', 60000, 2),
('Soldier', 48000, 1),
('Prohibitionist', 47000, 1),
('Nurse', 52000, 1),
('Billionaire', 100000, 3) 
ON CONFLICT (title) DO NOTHING;

-- Insert the first employee without a manager
INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES
('Sam', 'Richards', 2, NULL);  -- Sam is the caretaker

-- Insert remaining employees, referencing Sam (id 1)
INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES
('Jay', 'Richards', 2, 1),        -- Jay is Sam's husband
('Alberta', 'Hayes', 1, 1),       -- Alberta is a ghost from the 1920s
('Thorfinn', 'Norwegian', 1, 1),  -- Thorfinn is a Viking ghost
('Pete', 'Muir', 1, 1),           -- Pete is a Revolutionary War soldier ghost
('Hedge', 'Knight', 1, 1),        -- Hedge is a ghost from the Prohibition era
('Sasappis', 'Native American', 1, 1), -- Sasappis is a Native American ghost
('Flower', 'Powers', 1, 1);       -- Flower is a billionaire ghost
