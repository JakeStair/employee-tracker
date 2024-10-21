-- Insert roles into Role table
INSERT INTO Role (title)
VALUES 
('Ghost'),
('Caretaker'),
('Historian'),
('Chef'),
('Soldier'),
('Prohibitionist'),
('Nurse'),
('Billionaire');

-- Insert employees into Employee table
-- Assuming role_id corresponds to the roles defined above
INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES
('Sam', 'Richards', 1, NULL),    -- Sam is the caretaker and main character who interacts with the ghosts
('Jay', 'Richards', 2, 1),        -- Jay is Sam's husband and co-owner of the B&B
('Alberta', 'Hayes', 3, 1),       -- Alberta is a ghost from the 1920s and a singer
('Thorfinn', 'Norwegian', 4, 1),  -- Thorfinn is a Viking ghost with a warrior spirit
('Pete', 'Muir', 5, 1),           -- Pete is a Revolutionary War soldier ghost
('Hedge', 'Knight', 6, 1),        -- Hedge is a ghost from the Prohibition era
('Sasappis', 'Native American', 7, 1), -- Sasappis is a Native American ghost
('Flower', 'Powers', 8, 1);       -- Flower is a billionaire ghost from the 19th century

-- Optionally, insert departments if the Department table is being used
INSERT INTO Department (name)
VALUES
('Ghosts'),
('Human Resources'),
('History'),
('Culinary Arts');
