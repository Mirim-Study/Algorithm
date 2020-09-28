SELECT animal_type, NVL(name, 'No name') name, sex_upon_intake
FROM animal_ins
ORDER BY animal_id;
