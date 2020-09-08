SELECT ins.ANIMAL_ID, outs.NAME
FROM ANIMAL_INS ins, ANIMAL_OUTS outs
WHERE ins.ANIMAL_ID = outs.ANIMAL_ID
AND ins.datetime > outs.datetime
ORDER BY ins.datetime;
