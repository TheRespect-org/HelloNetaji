import React from 'react';
import axios from 'axios';
import Petition from './Petition';

let netas = [], allNetas = [];

export default class Netas extends React.Component {

    async getNetas() {
        try {

            const response = await axios.get(`//hellonetaji.therespect.org/api/politicians`);

            if (response.status === 200) {
                /* Map the response to IShariahStocks */
                allNetas = netas = response.data;
                this.setState({ netas });
            }

        } catch (ex) {
            console.log(ex);
            this.setState({ error: 'An error occured' });
        }
    }

    componentDidMount() {
        this.getNetas();
    }

    filterNetas(value) {
        value = value.toUpperCase();
        let filteredNetas = allNetas.filter((neta) => {
            return neta.ACName.toUpperCase().includes(value) ||
                neta.Party.toUpperCase().includes(value) ||
                neta.Mobile.toString().toUpperCase().includes(value) ||
                neta.Email.toUpperCase().includes(value) ||
                neta.Twitter.toUpperCase().includes(value) ||
                neta.Address.toUpperCase().includes(value);
        });
        netas = filteredNetas;
        this.setState({ netas: filteredNetas });
    }

    render() {
        return (
            <div className="row mt-4">
                <div className="col-sm-1"></div>

                <div className="col-sm-12">
                    <div>

                        <div className="input-group">
                            <input type="text" onInput={(e) => {
                                this.filterNetas(e.target.value);
                            }
                            } className="form-control" placeholder="search for your MLA from Maharashtra here (contact us on social media for data addition for other states)" name="search" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit"><i className="fas fa-search"></i></button>
                            </div>
                        </div>

                        {netas && netas.map((neta, i) =>

                            <div key={`${neta._id}-${neta.ACName}`} className='mt-3'>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <small> <sup className='text-muted'>
                                                {neta.No}
                                            </sup>
                                            </small>

                                            <label className='ml-3'> {neta['Sitting MLAs']} <small>({neta.Party}) from {neta.ACName}</small> </label>

                                            {/* <br />
                                            <button className="btn btn-primary" data-toggle="collapse" data-target={`#collapse${neta._id}-${neta.ACName}`} aria-expanded="false" aria-controls={`#collapse${neta._id}-${neta.ACName}`}>file petition</button> */}


                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            {neta.Mobile && <li>
                                                <small>phone:</small> <a href={`tel:${neta.Mobile}`}>{neta.Mobile}</a>
                                            </li>}

                                            {neta.Email && <li>
                                                <small>email:</small>
                                                <a href={`mailto:${neta.Email}`}>{neta.Email}</a>
                                            </li>}

                                            {neta.Twitter && <li>
                                                <small>social:</small> {neta.Twitter}
                                            </li>}

                                            {neta.Address && <li>
                                                <small>address:</small> {neta.Address}
                                            </li>}
                                        </ul>

                                    </div>
                                </div>

                                <div className="collapse mt-3" id={`collapse${neta._id}-${neta.ACName}`}>
                                    <Petition politician={neta} />
                                </div>
                            </div>

                        )}
                    </div>

                </div>
                <div className="col-sm-1"></div>
            </div>
        );
    }

}
