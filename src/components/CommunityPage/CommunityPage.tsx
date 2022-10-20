import * as React from 'react'
import { Input } from '../FormElements'
import type { InputProps } from '../FormElements'
import { SocialCard } from '../SocialCard'
import type { SocialCardProps, UserAccountProps } from '../SocialCard'

export const CommunityPage = ({
	socialCardProps,
	userAccountProps,
	inputProps,
}: CommunityPageProps): JSX.Element => {

	return (
		<div>Community Page
			<SocialCard
				timestamp={socialCardProps.timestamp}
				content={socialCardProps.content}
				likes={socialCardProps.likes}
				comments={socialCardProps.comments}
				user={userAccountProps}
			></SocialCard>
			<Input
				defaultValue={inputProps.defaultValue}
				label={inputProps.label}
				name={inputProps.name}
				onChange={() => { inputProps.onChange }}
				role={inputProps.role}
				type={inputProps.type}
			></Input>
		</div>
	)
}

export type CommunityPageProps = {
	socialCardProps: SocialCardProps
	userAccountProps: UserAccountProps
	inputProps: InputProps
}