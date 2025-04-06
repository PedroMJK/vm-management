INSERT INTO virtual_machine (name, status, cpu_cores, ramgb, diskgb, created_at) VALUES
('Ubuntu Server', 'running', 4, 8, 100, CURRENT_TIMESTAMP),
('Windows Server', 'stopped', 2, 4, 50, CURRENT_TIMESTAMP),
('CentOS Dev', 'running', 2, 6, 80, CURRENT_TIMESTAMP);
