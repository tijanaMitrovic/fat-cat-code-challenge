import React, { useState, useEffect, useRef } from 'react';
import { List, ListRowProps } from 'react-virtualized';
import { AutoSizer } from 'react-virtualized';
import { v4 as uuidv4 } from 'uuid';
import { IModel } from '../model/Model';
import './ListView.css';

function ListView() {
	const [data, setData] = useState<IModel[]>([]);
	const gridRef = useRef<List>();

	const getData = () => {
		fetch('generated.json', {
			headers:
            { 'Content-Type': 'application/json', Accept: 'application/json' },
		}).then((response) => {
			return response.json();
		}).then((myJSON:IModel[]) => {
			setData(myJSON);
		});
	};
	useEffect(() => {
		getData();
	}, []);

	const updateData = (newItem:IModel, index:number) => {
		data[index] = newItem;
		gridRef.current?.forceUpdateGrid();
	};

	const renderRow = (item: ListRowProps) => {
		const newItem: IModel | undefined = data && data[item.index];
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
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update index</button>
				</div>
				<div className="row">
					Guid:
					{' '}
					{newItem?.guid}
					<input
						id="guidId"
						type="text"
						onChange={(event) => {
							newItem.guid = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update guid</button>
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
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update activity</button>
				</div>
				<div className="row">
					Balance:
					{' '}
					{newItem?.balance}
					<input
						id="balanceId"
						type="text"
						onChange={(event) => {
							newItem.balance = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update balance</button>
				</div>
				<div className="row">
					Picture:
					{' '}
					{newItem?.picture}
					<input
						id="pictureId"
						type="text"
						onChange={(event) => {
							newItem.picture = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update picture</button>
				</div>
				<div className="row">
					Age:
					{' '}
					{newItem?.age}
					<input
						id="ageId"
						type="number"
						onChange={(event) => {
							newItem.age = Number(event.target.value);
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update age</button>
				</div>
				<div className="row">
					Eye color:
					{' '}
					{newItem?.eyeColor}
					<input
						id="eyeColorId"
						type="text"
						onChange={(event) => {
							newItem.eyeColor = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update eye color</button>
				</div>
				<div className="row">
					Name:
					{' '}
					{newItem?.name}
					<input
						id="nameId"
						type="text"
						onChange={(event) => {
							newItem.name = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update name</button>
				</div>
				<div className="row">
					Gender:
					{' '}
					{newItem?.gender}
					<input
						id="genderId"
						type="text"
						onChange={(event) => {
							newItem.gender = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update gender</button>
				</div>
				<div className="row">
					Company:
					{' '}
					{newItem?.company}
					<input
						id="companyId"
						type="text"
						onChange={(event) => {
							newItem.company = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update company</button>
				</div>
				<div className="row">
					Email:
					{' '}
					{newItem?.email}
					<input
						id="emailId"
						type="email"
						onChange={(event) => {
							newItem.email = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update email</button>
				</div>
				<div className="row">
					Phone:
					{' '}
					{newItem?.phone}
					<input
						id="phoneId"
						type="text"
						onChange={(event) => {
							newItem.phone = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update phone</button>
				</div>
				<div className="row">
					Address:
					{' '}
					{newItem?.address}
					<input
						id="addressId"
						type="text"
						onChange={(event) => {
							newItem.address = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update address</button>
				</div>
				<div className="row">
					About:
					{' '}
					{newItem?.about}
					<textarea
						id="aboutId"
						onChange={(event) => {
							newItem.about = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update about</button>
				</div>
				<div className="row">
					Registered:
					{' '}
					{newItem?.registered.toString()}
					<input
						id="registeredId"
						type="date"
						onChange={(event) => {
							newItem.registered = new Date(event.target.value);
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update registred</button>
				</div>
				<div className="row">
					Latitude:
					{' '}
					{newItem?.latitude}
					<input
						id="latitudeId"
						type="number"
						onChange={(event) => {
							newItem.latitude = Number(event.target.value);
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update latitude</button>
				</div>
				<div className="row">
					Longitude:
					{' '}
					{newItem?.longitude}
					<input
						id="longitudeId"
						type="number"
						onChange={(event) => {
							newItem.longitude = Number(event.target.value);
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update longitude</button>
				</div>
				<div className="row">
					Tags:
					{' '}
					{newItem?.tags.map((tag, index) => (
						<div key={uuidv4()} className="underRow">
							{index + 1 < newItem?.tags.length ? tag.concat(', ') : tag}
						</div>
					))}
				</div>
				<div className="row">
					Friends:
					{' '}
					{newItem?.friends.map((friend, index) => (
						<div key={friend.id} className="underRow">
							{index + 1 < newItem?.friends.length ? friend.name.concat(', ') : friend.name}
						</div>
					))}
				</div>
				<div className="row">
					Greeting:
					{' '}
					{newItem?.greeting}
					<input
						id="greetingId"
						type="text"
						onChange={(event) => {
							newItem.greeting = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update greeting</button>
				</div>
				<div className="row">
					Favorite fruit:
					{' '}
					{newItem?.favoriteFruit}
					<input
						id="favoriteFruitId"
						type="text"
						onChange={(event) => {
							newItem.favoriteFruit = event.target.value;
						}}
					/>
					<button type="button" onClick={() => updateData(newItem, item.index)}>Update favorite fruit</button>
				</div>
			</div>
		);
	};

	return (

		<div style={{ height: '100vh', width: '60vw' }} className="container">
			<AutoSizer>
				{({ height, width }) => (
					<List ref={(ref:List) => { gridRef.current = ref; }} width={width} height={height} rowHeight={1600} rowCount={data ? data?.length : 0} rowRenderer={renderRow} />
				)}

			</AutoSizer>
		</div>
	);
}
export default ListView;
