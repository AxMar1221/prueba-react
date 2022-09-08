import { teams } from '../data/teams';

export const getTeamByLeague = ( league ) =>{

    const validLeague = ['Liga Mx', 'Liga Expansión'];
    if ( !validLeague.includes( league ) ) {
        throw new Error(`${ league } is not a valid league`);
    }
    return teams.filter( teams => teams.league === league );
}