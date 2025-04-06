CREATE TABLE virtual_machine (
    id IDENTITY PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    cpu_cores INT NOT NULL,
    ramgb INT NOT NULL,
    diskgb INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
