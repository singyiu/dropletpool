/* eslint-disable jsx-a11y/accessible-emoji */

import _ from 'lodash'
import React from "react";
//import { useState } from "react";
import { MpCell } from '../components/ContentCell'
import { Card, Container, Search } from 'semantic-ui-react';
//import { useEventListener } from "../hooks";
//import axios from "axios";

export default function Member({purpose, setPurposeEvents, address, mainnetProvider, userProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts, signer, daiContract, serviceProviderMpIds, numOfMP, daiAddress }) {

    const getAllMpIdArr = (_numOfMPInt) => {
        return _.range(1,_numOfMPInt+1)
    }
    const numOfMPInt = numOfMP ? numOfMP.toNumber() : 0
    const allMpIdArr = getAllMpIdArr(numOfMPInt)
    //console.log('numOfMP', numOfMP)
    //console.log('numOfMPInt', numOfMPInt)
    //console.log('allMpIdArr', allMpIdArr)
        
    return (
        <Container>
            <Container>
                <div style={{height:24}}></div>
                <Search></Search>
            </Container>
            <Card.Group centered itemsPerRow={4}>
            {allMpIdArr ? allMpIdArr.map((mpId) => {
              return (
                <MpCell
                key={mpId}
                readContracts={readContracts}
                mpId={mpId}
                writeContracts={writeContracts}
                signer={signer}
                tx={tx}
                address={address}
                daiAddress={daiAddress}
                />
              )
            }) : null}
            </Card.Group>
        </Container>
    );
}
