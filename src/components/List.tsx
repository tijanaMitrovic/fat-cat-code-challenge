import React, { useState, useEffect, useRef } from 'react';
import { List as ListView, ListRowProps } from 'react-virtualized';
import { IModel } from '../model/Model';
import './List.css';
import { AutoSizer } from 'react-virtualized';

function List() {
	const [data, setData] = useState<IModel[]>([]);
	const [count, setCount] = useState(1);
	const gridRef = useRef<ListView>();

	const getData = () => {
		fetch('generated.json', {
			headers:
            { 'Content-Type': 'application/json', Accept: 'application/json' },
		}).then((response) => {
			// console.log(response);
			return response.json();
		}).then((myJSON:IModel[]) => {
			console.log(myJSON);
			setData(myJSON);
		});
	};
	useEffect(() => {
		getData();
	}, []);

	const updateData = (newItem:IModel, index:number) => {
		console.log(data[index]);
		data[index] = newItem;
		console.log(data[index]);
		// setCount(count + 1);
		console.log(gridRef.current);
		gridRef.current?.forceUpdateGrid();
	};

	const renderRow = (item: ListRowProps) => {
		const newItem: IModel | undefined = data && data[item.index];
		// console.log(newItem?.about);
		// item.style.border = '1px solid black';
		// item.style.margin = '10px';
		// item.style.width = '90%';
		return (
			<div key={item.key} style={item.style}>
				{newItem?.id && (
					<div className="row">

						Id:
						{' '}
						{newItem.id}

					</div>
				)}
				<div className="row">

					Index:
					{' '}
					{newItem?.index}

					<input
						id="indexId"
						type="number"
						onChange={(event) => {
							newItem.index = Number(event.target.value);
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update</button>
				</div>
				<div className="row">

					Guid:
					{' '}
					{newItem?.guid}

					<input id="guidId" type="text" />
				</div>
				<div className="row">

					Is active:
					{' '}
					{newItem?.isActive.toString()}

					<label htmlFor="activeTrueId">
						true
						<input
							id="activeTrueId"
							type="radio"
							name="isActive"
							value="true"
							onChange={(event) => {
								newItem.isActive = Boolean(event.target.value);
							}}
						/>
					</label>
					<label htmlFor="activeFalseId">
						false
						<input
							id="activeFalseId"
							type="radio"
							name="isActive"
							value="false"
							onChange={(event) => {
								const value:boolean = event.target.value === 'true';
								newItem.isActive = value;
							}}
						/>
					</label>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update</button>
				</div>
				<div className="row">

					Balance:
					{' '}
					{newItem?.balance}

					<input id="balanceId" type="text" />
				</div>
				<div className="row">

					Picture:
					{' '}
					{newItem?.picture}
					<input id="pictureId" type="text" />
				</div>
				<div className="row">

					Age:
					{' '}
					{newItem?.age}

					<input id="ageId" type="number" />
				</div>
				<div className="row">

					Eye color:
					{' '}
					{newItem?.eyeColor}

					<input id="eyeColorId" type="text" />
				</div>
				<div className="row">

					Name:
					{' '}
					{newItem?.name}

					<input id="nameId" type="text" />
				</div>
				<div className="row">

					Gender:
					{' '}
					{newItem?.gender}

					<input id="genderId" type="text" />
				</div>
				<div className="row">

					Company:
					{' '}
					{newItem?.company}

					<input id="companyId" type="text" />
				</div>
				<div className="row">

					Email:
					{' '}
					{newItem?.email}

					<input id="emailId" type="email" />
				</div>
				<div className="row">

					Phone:
					{' '}
					{newItem?.phone}

					<input id="phoneId" type="text" />
				</div>
				<div className="row">

					Address:
					{' '}
					{newItem?.address}

					<input id="addressId" type="text" />
				</div>
				<div className="row">

					About:
					{' '}
					{newItem?.about}

					<textarea id="aboutId" />
				</div>
				<div className="row">

					Registered:
					{' '}
					{newItem?.registered}

					<input id="registeredId" type="date" />
				</div>
				<div className="row">

					Latitude:
					{' '}
					{newItem?.latitude}

					<input id="latitudeId" type="number" />
				</div>
				<div className="row">

					Longitude:
					{' '}
					{newItem?.longitude}

					<input id="longitudeId" type="number" />
				</div>
				<div className="row">

					Tags:
					{' '}
					{newItem?.tags}

				</div>
				<div className="row">

					Friends:
					{' '}
					{newItem?.friends.map(friend => <span key={friend.id}>{friend.name}</span>)}

				</div>
				<div className="row">

					Greeting:
					{' '}
					{newItem?.greeting}

					<input id="greetingId" type="text" />
				</div>
				<div className="row">

					Favorite fruit:
					{' '}
					{newItem?.favoriteFruit}

					<input id="favoriteFruitId" type="text" />
				</div>
			</div>
		);
	};

	return (

		<div style={{ height: '100vh', width: '80vw' }} className="container">
			<AutoSizer>
				{({ height, width }) => (
					<ListView ref={(ref:ListView) => { gridRef.current = ref; }} width={width} height={height} rowHeight={1100} rowCount={data ? data?.length : 0} rowRenderer={renderRow} />
				)}

			</AutoSizer>
		</div>
	);
}
export default List;
