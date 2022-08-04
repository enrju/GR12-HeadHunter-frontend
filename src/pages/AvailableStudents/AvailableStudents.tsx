import React, {useState} from "react";
import './AvailableStudents.css';
import {Tools} from "../../components/Tools/Tools";
import {Student} from "../../components/Student/Student";
import {Pagination} from "../../components/Pagination/Pagination";
import {Filter, Filtered} from "../../components/Filter/Filter";

export const AvailableStudents = () => {

    const [filter, setFilter] = useState<boolean>(false)
    const [filtered, setFiltered] = useState<Filtered>({
        ratingCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingActiveInCourse: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingCode: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        ratingScrum: {
            fiveStar: false,
            fourStar: false,
            threeStar: false,
            twoStar: false,
            oneStar: false
        },
        placeWork: {
            remoteWork: false,
            officeWork: false,
        },
        contractType: {
            contractOfEmployment: false,
            b2b: false,
            contractOfMandate: false,
            contractWork: false,
        },
        salaryPrice: {
            from: '',
            to: '',
        },
        freeWork: '',
        commercialExp: 0,
    })

    const [activeFilter, setActiveFilter] = useState(false)

    const showFiltered = (obj: Filtered) => {
        setFiltered(obj)
    }

    const [search, setSearch] = useState<string>('')

    const countElements = (num: number) => {
        return num
    }

    return (
        <>
            <section>
                <div className="AvailableStudents">
                    <Tools filter={setFilter} setSearch={setSearch} search={search}/>
                    <hr/>
                    <div className="students">
                        <Student filtered={filtered} activeFilter={activeFilter} search={search} countElements={countElements}/>
                    </div>
                </div>
                <Pagination count={countElements}/>
            </section>
            {filter ? <Filter filter={setFilter} showFiltered={showFiltered} setActiveFilter={setActiveFilter}/> : null}
        </>
    )
}