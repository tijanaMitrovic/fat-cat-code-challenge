import React, { useState, useEffect, useRef } from 'react';
import { List, ListRowProps } from 'react-virtualized';
import { AutoSizer } from 'react-virtualized';
import { IGenericModel } from '../model/GenericModel';
import Utils from '../utils/Utils';
import './ListView.css';

function GenericListView() {
	const [data, setData] = useState<IGenericModel[]>([]);
	const gridRef = useRef<List>();
	const getData = () => {
		fetch('generic.json', {
			headers:
                { 'Content-Type': 'application/json', Accept: 'application/json' },
		}).then((response) => {
			return response.json();
		}).then((myJSON) => {
			const arrayValues = [];
			const allKeys = Object.keys(myJSON);
			for (const key in allKeys) {
				if (key) {
					const element = myJSON[key];
					const elementKeys = Object.keys(element);
					for (const elementKey in elementKeys) {
						if (elementKey) {
							const value = element[elementKeys[elementKey]];
							arrayValues.push({
								propertyName: elementKeys[elementKey],
								propertyValue: value,
								type: getType(value),
								isEditable: isEditable(typeof value),
							});
						}
					}
				}
			}
			setData(arrayValues.filter(el => el.type !== ''));
		});
	};
	useEffect(() => {
		getData();
	}, []);

	const updateData = (newItem:IGenericModel, index:number) => {
		data[index] = newItem;
		gridRef.current?.forceUpdateGrid();
	};

	const isEditable = (valueType: string) => {
		switch (valueType) {
		case 'string':
		case 'number':
		case 'date':
		case 'boolean':
			return true;
		default: return false;
		}
	};

	const getType = (value: string) => {
		switch (typeof value) {
		case 'string':
			if (Utils.checkIsEmail(value)) {
				return 'email';
			}
			if (Utils.checkIsDate(value)) {
				return 'date';
			}
			return 'text';
		case 'number':
			return 'number';
		case 'boolean':
			return 'boolean';
		default: return '';
		}
	};

	const renderRow = (item: ListRowProps) => {
		const newItem: IGenericModel = data && data[item.index];
		const isBoolean = newItem.type === 'boolean';
		const isLongText = newItem.type === 'text' && newItem.propertyValue.length > 50;
		return (
			<div key={item.key} style={item.style}>
				<div className="row">
					{newItem.propertyName}
					{' '}
					:
					{' '}
					{!isBoolean ? newItem.propertyValue : newItem.propertyValue.toString()}
					{isLongText && (
						<textarea
							onChange={(event) => {
								newItem.propertyValue = event.target.value;
							}}
						/>
					)}
					{isBoolean && (
						<>
							<label htmlFor="trueId">
								true
								<input
									id="trueId"
									type="radio"
									name="trueOrFalse"
									value="true"
									onChange={(event) => {
										newItem.propertyValue = event.target.value;
									}}
								/>
							</label>
							<label htmlFor="falseId">
								false
								<input
									id="falseId"
									type="radio"
									name="trueOrFalse"
									value="false"
									onChange={(event) => {
										newItem.propertyValue = event.target.value;
									}}
								/>
							</label>
						</>
					)}
					{!isLongText && !isBoolean && newItem.propertyName !== 'id' && (
						<input
							type={newItem.type}
							onChange={(event) => {
								newItem.propertyValue = event.target.value;
							}}
						/>
					)}
					{newItem.propertyName !== 'id' && (<button type="button" onClick={() => updateData(newItem, item.index)}>Update</button>)}
				</div>
			</div>
		);
	};
	return (

		<div style={{ height: '100vh', width: '60vw' }} className="container">
			<AutoSizer>
				{({ height, width }) => (
					<List ref={(ref: List) => { gridRef.current = ref; }} width={width} height={height} rowHeight={200} rowCount={data ? data?.length : 0} rowRenderer={renderRow} />
				)}

			</AutoSizer>
		</div>
	);
}
export default GenericListView;
