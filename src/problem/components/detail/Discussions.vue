<template>
    <div class="submissions">
        <!-- <div class="no-submit">
            <h3>You don't have any submissions yet.</h3>
        </div> -->
        <table>
            <tr>
                <th>Title</th>
                <th>Created At</th>
                <th>Comments</th>
                <th>Like</th>
                <th>Dislike</th>
            </tr>
            <tr>
                <td>03/20/2022 11:03</td>
                <td class="red">Runtime Error</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>python3</td>
            </tr>
            <tr>
                <td>03/20/2022 09:45</td>
                <td class="green">Accepted</td>

                <td>80 ms</td>
                <td>13.8 MB</td>
                <td>python3</td>
            </tr>
            <tr>
                <td>03/17/2022 22:05</td>
                <td class="red">Wrong Answer</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>javascript</td>
            </tr>
            <tr>
                <td>03/17/2022 22:05</td>
                <td class="red">Compile Error</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>java</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "Discussions",
};
</script>

<style lang="scss" scoped>
.submissions {
    padding: 10px;
    .no-submit {
        margin-top: 15%;
        h3 {
            color: var(--text-color-light);
            text-align: center;
        }
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        th,
        td {
            border-collapse: collapse;
            border-spacing: 0;
            padding: 5px;
            text-align: left;
        }
        tr:nth-child(even) {
            background-color: var(--container-color-darker);
        }
        .red {
            color: rgb(255, 70, 70);
        }
        .green {
            color: rgb(43, 223, 43);
        }
    }
}
</style>