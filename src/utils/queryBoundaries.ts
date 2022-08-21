const queryBoundaries = (query: any): [number] => {
    const splitedDateFrom = (query.dateFrom as string).split("-W");
    const splitedDateTo = (query.dateTo as string).split("-W");

    const range: number = Number(query.range as string);

    const dateFromYear: number = Number(splitedDateFrom[0]);
    const dateToYear: number = Number(splitedDateTo[0]);

    const dateFromWeek: number = Number(splitedDateFrom[1]);
    const dateToWeek: number = Number(splitedDateTo[1]);

    let yearDiff = 0;
    let boundaries: [number] = [0];
    boundaries.shift();

    let loopLen = dateToYear > dateFromYear ? 53 : dateToWeek;
    let rangeDiff = loopLen % range;
    rangeDiff ? (loopLen = loopLen + range) : (loopLen = loopLen);

    for (let index = dateFromWeek; index <= loopLen; index += range)
        boundaries.push(
            Number(`${dateFromYear}${String(index).padStart(2, "0")}`)
        );

    if (dateToYear > dateFromYear) {
        yearDiff = dateToYear - dateFromYear;

        loopLen = yearDiff > 1 ? 53 : dateToWeek;
        let rangeDiff = loopLen % range;
        rangeDiff ? (loopLen = loopLen + range) : (loopLen = loopLen);
        const loopFirstIndex = Number("01");
        for (let index = loopFirstIndex; index <= loopLen; index += range)
            boundaries.push(
                Number(`${dateFromYear + 1}${String(index).padStart(2, "0")}`)
            );

        if (yearDiff > 1) {
            for (
                let index = loopFirstIndex;
                index <= dateToWeek;
                index += range
            )
                boundaries.push(
                    Number(`${dateToYear}${String(index).padStart(2, "0")}`)
                );
        }
    }
    return boundaries;
};

export default queryBoundaries;
