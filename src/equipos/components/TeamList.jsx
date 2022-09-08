import { useMemo } from 'react';
import { TeamCard } from './index';
import { getTeamByLeague } from '../helpers';

export const TeamList = ({ league }) => {

    const teams = useMemo( () => getTeamByLeague( league ), [ league ]);

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                teams.map( team => (
                    <TeamCard 
                    key={ team.id }
                    { ...team } />
                ))
            }
        </div>
    )
}
