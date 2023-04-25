import { CollectionPath } from '@/types/index';
import React from 'react';
import ModuleCard from '@/common/learning_path/module/module_card';

const CollectionCard = ({ collection }: { collection: CollectionPath }) => {
	return (
		<li>
			<h4>{collection.name}</h4>
			<ul className="list-none divide-y">
				{collection.modules.map((module, index) => (
					<ModuleCard key={index} module={module} />
				))}
			</ul>
		</li>
	)
}

export default CollectionCard;