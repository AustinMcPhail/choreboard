/* eslint-disable react/prop-types */
import React from 'react'
import ChorePostit from './ChorePostit'

const ChoreList = ({ chores = [] }) => (
  <div className="bg-dolfer h-auto pb-64 relitive rounded-md">
    <div className="center-notch" />
    <div className="left-notch" />
    <div className="right-notch hidden" />
    <div className="flex justify-between">
      <h4 className="pl-4 m-0">Chores</h4>
      <h4 className="pr-6 m-0 text-blue-500">+</h4>
    </div>
    <div className="p-2 chore_list">
      {chores &&
        chores?.map((chore, index) => (
          <ChorePostit id={chore?.id} key={index} />
        ))}
    </div>
  </div>
)

export default ChoreList
