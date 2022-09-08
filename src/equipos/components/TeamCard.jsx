export const TeamCard = ({ 
    id,
    name_team,
    foundation_year,
    popular_name,
    league,
}) => {

    const teamImageUrl = `/assets/escudos/${ id }.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={ teamImageUrl } className="card-img" alt={ name_team } />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ name_team }</h5>
                            <p className="card-text">{ popular_name }</p>
                            <p className="text-muted">Año de fundación: { foundation_year }</p>
                            <p className="card-text">
                                <small className="text-muted">Liga: { league }</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
