import { gql } from 'graphql-request';

export const getAllModules = () => {
    return gql`
        {
            modules {
                id
                moduleName
                moduleNumber
            }
        }
    `
}