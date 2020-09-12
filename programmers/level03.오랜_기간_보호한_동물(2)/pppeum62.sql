SELECT ins.animal_id, ins.name
FROM animal_ins ins, animal_outs outs
WHERE ins.animal_id = outs.animal_id
ORDER BY (outs.datetime - ins.datetime) DESC
LIMIT 2;
